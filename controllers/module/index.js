const getModules=require('./getAll.controller.js');
const createModule=require('./create.controller.js');
const updateModule=require('./update.controller.js');
const deleteModule=require('./delete.controller.js');
module.exports={
    getModules,
    createModule,
    updateModule,
    deleteModule,
};