const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Olá ${(Object.values(order.order.delivery)[0])}, entrega para: ${Object.values(order)[0]}, Telefone: ${Object.values(order)[1]}, R. ${Object.values(order.address)[0]}, N°: ${Object.values(order.address)[1]}, AP: ${Object.values(order.address)[2]}`
}

customerInfo(order);

const orderModifier = (order) => {
  return `Olá Luiz Silva, o total do seu pedido de ${Object.keys(order.order.pizza)} e ${Object.values(order.order.drinks.coke)[0]} é R$ 50,00.`
}
