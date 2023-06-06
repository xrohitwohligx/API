// @description Get all contacts
//@route Get/api/contacts
// @access public
const getContacts = (req, res) => {
    res.status(200).json({message:"Get all contacts"});
}

// @description create new contacts
//@route post/api/contacts
// @access public
const createContact = (req, res) => {
    console.log("the request body is", req.body);
    const {name, email, phone } = req.body;
    if(!name || !email || !phone)
    {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({message:"Create contacts"});
}

// @description get new contacts
//@route GET /api/contacts/:id
// @access public
const getContact = ((req, res)=>{
    res.status(200).json({message:`Get contact for ${req.params.id}`});
})

// @description update new contacts
//@route UPDATE /api/contacts/:id
// @access public
const updateContact = ((req, res)=>{
    res.status(201).json({message:`Update for contact ${req.params.id}`});
})

// @description delete new contacts
//@route DELETE /api/contacts/:id
// @access public
const deleteContact = ((req, res)=>{
    res.status(200).json({message:`delete for contact ${req.params.id}`});
})






module.exports = { getContacts, createContact, getContact, updateContact, deleteContact }
