import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../styles/invoice.css';

function InvoiceGenerator() {
    const [invoice, setInvoice] = useState(null);

    const generateInvoice = () => {
        // Your invoice generation logic here
        const newInvoice = {
            // Example invoice data
            id: 123,
            date: new Date().toLocaleDateString(),
            total: 100.00,
            items: [
                { id: 1, description: 'Item 1', quantity: 2, price: 25.00 },
                { id: 2, description: 'Item 2', quantity: 1, price: 50.00 }
            ]
        };
        setInvoice(newInvoice);
    };

    const downloadInvoice = () => {
        if (invoice) {
            html2canvas(document.getElementById('invoice-container')).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save(`invoice_${invoice.id}.pdf`);
            });
        }
    };

    return (
        <div className='InvoiceBg'>
            <button onClick={generateInvoice}>Generate Invoice</button>
            <button onClick={downloadInvoice} disabled={!invoice}>Download Invoice</button>
            {invoice && (
                <div id="invoice-container">
                    <h2 className='card-title'>Invoice #{invoice.id}</h2>
                    <p >Date: {invoice.date}</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Description </th>
                                <th>Quantity </th>
                                <th>Price </th>
                                <th>Total </th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoice.items.map(item => (
                                <tr key={item.id}>
                                    <td>{item.description}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>${(item.quantity * item.price).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p>Total: ${invoice.total.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
}

export default InvoiceGenerator;
