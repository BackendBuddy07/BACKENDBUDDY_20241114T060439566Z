// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const SchemaOne = require('../models/schemaoneSchema');

// CRUD operations for SchemaOne
// Create Controller 
const createSchemaOne = async (req, res) => { 
    const { field1, field2 } = req.body;
    try {
        const schemaone = await SchemaOne.create({ field1, field2 }) 
        await schemaone.save();
        res.status(201).json(schemaone);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        res.status(500).json({'Server Error ': error.message});
    }
};

// Update Controller 
const updateSchemaOne = async (req, res) => { 
    const _id=req.params.id;
    const { field1, field2 } = req.body;
    try {
        const schemaone = await SchemaOne.findByIdAndUpdate( _id, { field1, field2 },{new:true}) 
        if (!schemaone) {
            return res.status(404).send('schemaone not found');
        }
        await schemaone.save();
        res.status(201).json(schemaone);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// Delete Controller 
const deleteSchemaOne = async (req, res) => { 
    const _id=req.params.id;
    try {
        const schemaone = await SchemaOne.findById(_id)
        if (!schemaone) {
            return res.status(404).send('schemaone not found');
        }
        await SchemaOne.deleteOne({_id: _id})
        await schemaone.save();
        res.status(201).json({message: "Deleted Successfully"});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// get by Id Controller 
const getSchemaOne = async (req, res) => { 
    const _id=req.params.id;
    try {
        const schemaone = await SchemaOne.findById(_id)
        if (!schemaone) {
            return res.status(404).send('schemaone not found');
        }
        res.status(201).json(schemaone);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// getAll Controller 
const getAllSchemaOne = async (req, res) => { 
    try {
        const schemaone = await SchemaOne.find({})
        if (!schemaone) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(schemaone);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

module.exports = {
    createSchemaOne,
    updateSchemaOne,
    deleteSchemaOne,
    getSchemaOne,
    getAllSchemaOne
}