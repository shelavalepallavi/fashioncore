

Router.post("/create-checkout-session",async(req,res)=>{
  const[products] = req.body;

  const lineItems  = products.map((product)=>({
    price_data:{
      currency:"usd",
      product_data:{
        name:product.name,
        images:[product.image]
      },
      unit_amount:Math.round(product.price*100),
    },
    Quantity:product.Quantity
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types:["card"],
    line_items:lineItems,
    mode:"payment",
    success_url:"http://localhost:3000/success",
    cancel_url:"http://localhost:3000/cancel",
  });
  res.json({id:session.id})
})

module.exports = router;