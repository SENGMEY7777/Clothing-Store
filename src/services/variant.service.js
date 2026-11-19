const crypto = require('crypto');
const variant.Model = require('../models/variant.Model');

const findAll = async (filters) => {
    return variant.Model.findAll(filters);
};

const findById = async (id) => {
    return variant.Model.findById(id);
};

const create = async (payload) => {
    const id = 'var_' + crypto.randomUUID().slice(0, 8);
    return variant.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await variant.Model.findById(id);
    if (!existing) {
        const error = new Error('Variant. not found');
        error.status = 404;
        throw error;
    }
    return variant.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return variant.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
