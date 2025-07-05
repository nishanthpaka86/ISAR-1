import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import logo from '../logo1.png'; // ✅ Make sure logo is present in assets/

export const generateReceiptPDF = (pay) => {
  const doc = new jsPDF();

  const img = new Image();
  img.src = logo;

  // Wait for logo to load before drawing receipt
  img.onload = () => {
    doc.addImage(img, 'PNG', 80, 10, 50, 50); // Centered logo

    // ✅ Add institute name
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('INDIAN SCIENTIFIC AEROSPACE AND ROBOTICS INSTITUTE', 105, 70, { align: 'center' });

    // ✅ Add Receipt ID
    doc.setFontSize(13);
    doc.setTextColor(50, 50, 50);
    doc.text(`Receipt ID: ${pay.receipt_id || 'N/A'}`, 105, 80, { align: 'center' });

    // ✅ Add Payment Date
    doc.setFontSize(11);
    doc.text(`Date: ${new Date(pay.payment_date).toLocaleString()}`, 20, 95);

    // ✅ Draw User and Course Info in table
    autoTable(doc, {
      startY: 105,
      head: [['Field', 'Details']],
      body: [
        ['User Name', pay.user_name],
        ['Email', pay.email],
        ['Course Title', pay.course_title],
        ['Amount Paid', `₹${pay.amount}`],
        ['Payment Status', pay.status],
      ],
      styles: { fontSize: 11 },
      headStyles: { fillColor: [43, 114, 251] },
    });

    doc.save(`receipt-${pay.receipt_id || 'unknown'}.pdf`);
  };

  // ⏳ Fallback: If logo doesn't load within 1 second, still draw the receipt
  setTimeout(() => {
    if (doc.internal.pages.length === 1) {
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('INDIAN SCIENTIFIC AEROSPACE AND ROBOTICS INSTITUTE', 105, 30, { align: 'center' });

      doc.setFontSize(13);
      doc.text(`Receipt ID: ${pay.receipt_id || 'N/A'}`, 105, 40, { align: 'center' });

      doc.setFontSize(11);
      doc.text(`Date: ${new Date(pay.payment_date).toLocaleString()}`, 20, 55);

      autoTable(doc, {
        startY: 65,
        head: [['Field', 'Details']],
        body: [
          ['User Name', pay.user_name],
          ['Email', pay.email],
          ['Course Title', pay.course_title],
          ['Amount Paid', `₹${pay.amount}`],
          ['Payment Status', pay.status],
        ],
        styles: { fontSize: 11 },
        headStyles: { fillColor: [43, 114, 251] },
      });

      doc.save(`receipt-${pay.receipt_id || 'unknown'}.pdf`);
    }
  }, 1000);
};
