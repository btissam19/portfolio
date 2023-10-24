const {CreateSkills}=require('../controller/skills')
const upload=require('../middleware/uploadFiles')

const app=require('express')
const SkillsRoutes= app.Router()


SkillsRoutes.route('/').post(upload.single('file'),CreateSkills);

module.exports =SkillsRoutes;