const { createCart, showCart, addProduct, removeProduct, login, signup } = require('./AuthRepository');

class AuthController {
  async createCart(_req, res) {
    try {
      const result = await createCart();
      res.status(result.status).json(result.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  }

  async showCart(req, res) {
    try {
      const result = await showCart();
      res.status(result.status).json(result.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  }

  async addToCart(req, res) {
    try {
      const { id } = req.params;
      const product = req.body;
      const result = await addProduct(id, product);
      res.status(result.status).json(result.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  }

  async removeFromCart(req, res) {
    try {
      const { id } = req.params;
      const { customLineItemId } = req.body;
      const result = await removeProduct(id, customLineItemId);
      res.status(result.status).json(result.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  }

  async userSignup(req, res) {
    try {
      const customer = req.body;
      const result = await signup(customer);
      res.status(result.status).json(result.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  }

  async userLogin(req, res) {
    try {
      const customer = req.body;
      const result = await login(customer);
      res.status(result.status).json(result.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  }

  /* async create(req, res) {
    try {
      const cart = req.body;
      const result = await createCart(cart);
      res.status(result.status).json(result.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const cart = req.body;
      const result = await updateCart(id, cart);
      res.status(result.status).json(result.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const { version } = req.query;
      const result = await deleteCart(id, version);
      res.status(result.status).json(result.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  } */
}

module.exports = AuthController;
