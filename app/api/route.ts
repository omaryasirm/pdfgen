import chromium from "@sparticuz/chromium-min";
import { PDFDocument } from "pdf-lib";
import { Browser } from "puppeteer";
import { Browser as CoreBrowser } from "puppeteer-core";

export const GET = async (req: Request) => {
  const reqUrl = new URL(req.url);
  const searchParams = reqUrl.searchParams;
  const origin = reqUrl.origin;

  const urls = searchParams.getAll("url");

  if (!urls || urls.length === 0)
    return Response.json({ error: "No URL provided" }, { status: 400 });

  const fullUrls = urls.map((u) => {
    if (!u.startsWith("http")) return origin + u;
    return u;
  });

  let browser: Browser | CoreBrowser;
  if (process.env.NODE_ENV === "production") {
    const puppeteer = await import("puppeteer-core");
    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  } else {
    const puppeteer = await import("puppeteer");
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      headless: "shell",
    });
  }

  const pdfBuffers = await Promise.all(
    fullUrls.map(async (url) => {
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: "networkidle0" });
      const pdf = await page.pdf({ format: "a4", printBackground: true });

      return pdf;
    })
  );

  await browser.close();

  const mergedPdf = await PDFDocument.create();

  for (const pdfBuffer of pdfBuffers) {
    const pdf = await PDFDocument.load(pdfBuffer);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => {
      mergedPdf.addPage(page);
    });
  }

  const mergedPdfBuffer = await mergedPdf.save();

  const pdfBlob = new Blob([mergedPdfBuffer], { type: "application/pdf" });

  return new Response(pdfBlob, {
    headers: {
      "Content-Type": "application/pdf",
    },
    status: 200,
  });
};
