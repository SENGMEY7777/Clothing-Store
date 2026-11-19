const size.Service = require('../services/size.Service');

const getAll = async (req, res, next) => {
    try {
        const data = await size.Service.findAll(req.query);
        return res.status(200).json({ success: true, count: data.length, data });
    } catch (error) {
        return next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const item = await size.Service.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ success: false, message: 'Size. not found' });
        }
        return res.status(200).json({ success: true, data: item });
    } catch (error) {
        return next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const created = await size.Service.create(req.body);
        return res.status(201).json({ success: true, message: 'Size. created successfully', data: created });
    } catch (error) {
        return next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const updated = await size.Service.update(req.params.id, req.body);
        return res.status(200).json({ success: true, message: 'Size. updated successfully', data: updated });
    } catch (error) {
        return next(error);
    }
};

const deleteItem = async (req, res, next) => {
    try {
        await size.Service.delete(req.params.id);
        return res.status(200).json({ success: true, message: 'Size. deleted successfully' });
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: deleteItem,
};
