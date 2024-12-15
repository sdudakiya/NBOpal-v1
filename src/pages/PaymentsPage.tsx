import React from 'react';
import { CreditCard, Receipt, History } from 'lucide-react';

const payments = [
  {
    id: 1,
    title: 'Maintenance Due',
    amount: '₹5,000',
    dueDate: 'March 15, 2024',
    status: 'pending'
  },
  {
    id: 2,
    title: 'Electricity Bill',
    amount: '₹2,300',
    dueDate: 'March 20, 2024',
    status: 'pending'
  }
];

const history = [
  {
    id: 1,
    title: 'Maintenance Fee',
    amount: '₹5,000',
    date: 'Feb 15, 2024',
    status: 'completed'
  },
  {
    id: 2,
    title: 'Electricity Bill',
    amount: '₹2,100',
    date: 'Feb 10, 2024',
    status: 'completed'
  }
];

export default function PaymentsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Payments</h1>
      
      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button className="flex items-center justify-center space-x-2 p-4 bg-blue-600 text-white rounded-xl">
          <CreditCard className="h-5 w-5" />
          <span>Pay Now</span>
        </button>
        <button className="flex items-center justify-center space-x-2 p-4 bg-gray-100 text-gray-700 rounded-xl">
          <Receipt className="h-5 w-5" />
          <span>View Bills</span>
        </button>
      </div>

      {/* Pending Payments */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Pending Payments</h2>
        <div className="space-y-4">
          {payments.map(payment => (
            <div key={payment.id} className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{payment.title}</h3>
                <span className="text-blue-600 font-semibold">{payment.amount}</span>
              </div>
              <p className="text-sm text-gray-500">Due by {payment.dueDate}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Payment History */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <History className="h-5 w-5 text-gray-600" />
          <h2 className="text-lg font-semibold">Payment History</h2>
        </div>
        <div className="space-y-4">
          {history.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{item.title}</h3>
                <span className="text-green-600 font-semibold">{item.amount}</span>
              </div>
              <p className="text-sm text-gray-500">Paid on {item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}