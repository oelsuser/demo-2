const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

//models
var Employee = require('../models/employee');

// get Employee
router.get('/', (req,res) => {
    Employee.find((err, docs) => {
        if(!err)
            res.send(docs)
    });
});

// save Employee(Angular Modal)
router.post('/', (req,res) => {
    var employeeData = new Employee({
        empid : req.body.empId,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        dob : req.body.dob,
        mobileno : req.body.mobileno,
        city : req.body.city,
        address : req.body.address
    });
    employeeData.save((err, doc) => {
        if(!err)
            res.send(doc)
        else    
            res.send('Data Not Found');
    })
});

// get employee by id
router.get('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id))
        Employee.findById((req.params.id), (err, doc) => {
            req.send(doc)
        })
    else 
    {
        res.send('Data Not Found');
    }
})

// update employee data
router.post((req,res) => {
    if(!ObjectId.isValid(req.params.id))
        res.send('Data Not Found');
        else
            var employeDaa = {
                empid : req.body.empId,
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                dob : req.body.dob,
                mobileno : req.body.mobileno,
                city : req.body.city,
                address : req.body.address
            }

            Employee.findByIdAndUpdate(req.params.id, {$set: employeeData}, {new: true}, (err, doc) => {
                if(!err)
                    res.send(doc)
                else
                    res.send('Data not Updated');
            });
});

// Delete employee in(Angular Modal)
router.delete('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id))
        Employee.findByIdAndDelete(req.params.id, (err, doc) => {
            if(!err)
                res.send(doc)
            else
                res.send('Data not found');
        })
});

module.exports = router