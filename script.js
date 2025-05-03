const express = require('express');
const app = express();
const joi = require('joi');
app.use(express.json());

const customers = [
    {title: 'customer1', id:1},
    {title: 'customer2', id:2},
    {title: 'customer3', id:3},
    {title: 'customer4', id:4},
    {title: 'customer5', id:5},
    {title: 'customer6', id:6},
] 
app.get('/',(req,res) => {
    res.send('Hello world welcome to shannu world!')
})
app.get('/api/customers', (req, res) => {
    res.send(customers);
});

app.get('/api/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">oops....Customer not found</h2>');
    res.send(customer);
}); 

app.post('/api/customers', (req, res) => {
    const { error } = validateCustomer(req.body); // result.error
    if (error) return res.status(400).send(error.details[0].message);

    const customer = {
        id: customers.length + 1,
        title: req.body.title
    };
    customers.push(customer);
    res.send(customer);
}) 

app.put('/api/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) return res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">oops....Customer not found</h2>');

    const { error } = validateCustomer(req.body); // result.error
    if (error) return res.status(400).send(error.details[0].message);

    customer.title = req.body.title;
    res.send(customer);
})
app.delete('/api/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) return res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">oops....Customer not found</h2>');

    const index = customers.indexOf(customer);
    customers.splice(index, 1);
    res.send(customer);
})  

function validateCustomer(customer) {
    const schema = joi.object({
        title: joi.string().min(3).required()
    });
    return schema.validate(customer);
}

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));