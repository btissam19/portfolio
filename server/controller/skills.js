const Skills = require('../models/Skills');

const CreateSkills = async (req, res) => {
    try {
        const { category, technologie } = req.body;
        const filePath = req.file ? req.file.path : null;

        let skillDoc = await Skills.findOne({ category: category }).exec();

        if (!skillDoc) {
            const newSkills = new Skills({
                category,
                skills: [{
                    file: filePath,
                    technologie
                }]
            });
            await newSkills.save();
            res.json({ skills: newSkills });
        } else {
            const skillsnew = { file: filePath, technologie: technologie };
            skillDoc.skills.push(skillsnew);
            await skillDoc.save();
            res.json({ skills: skillDoc });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { CreateSkills };
