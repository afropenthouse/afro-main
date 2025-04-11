'use client';

import PaystackPop from '@paystack/inline-js';

export default function Test() {
  const paystack = new PaystackPop();
  paystack.newTransaction({
    key: 'sk_test_ffd7c72590f9c622a8a7d89e906237ac05352729',
    email: 'example@email.com',
    amount: 10000,
  });

  async function createUser() {
    const res = await fetch('https://api.paystack.co/customer', {
      method: 'POST',
      headers: {
        // Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        Authorization: `Bearer sk_test_ffd7c72590f9c622a8a7d89e906237ac05352729`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test127@test.com',
        name: 'Naka',
        first_name: 'Maximus',
        last_name: 'The Great',
        phone: '+2348164918641',
      }),
    });
    console.log('it ran');
    console.log(res);
  }

  async function pay() {
    const res = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer sk_test_ffd7c72590f9c622a8a7d89e906237ac05352729`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test127@test.com',
        amount: '20000',
      }),
    });
    console.log('it ran');
    console.log(res);
  }

  function payWithPaystack(e) {
    e.preventDefault();

    let handler = PaystackPop.setup({
      key: 'sk_test_ffd7c72590f9c622a8a7d89e906237ac05352729', // Replace with your public key
      email: 'onyedibesixtusna@gmail.com',
      amount: 1000,
      // ref: '' + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      // label: "Optional string that replaces customer email"
      onClose: function () {
        alert('Window closed.');
      },
      callback: function (response) {
        let message = 'Payment complete! Reference: ' + response.reference;
        alert(message);
      },
    });

    handler.openIframe();
  }

  return (
    <main className='pt-[50vh]'>
      <button
        className='w-[200px] bg-secondary text-white font-bold text-2xl'
        onClick={createUser}
      >
        moon
      </button>
    </main>
  );
}
