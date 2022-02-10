export async function loader({ params }) {
  const report = await getReport(params.id);
  const pdf = await generateReportPDF(report);
  return new Response(pdf, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf"
    }
  });
}