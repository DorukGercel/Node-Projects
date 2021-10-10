const {Project} = require('../models');

const getProjects = async () => {
    const projects = await Project.find().exec();
    return projects;    
}

const renderAllProjects = async (res) => {
    res.render('projects', {
        title: 'Project Management System',
        page_title: 'All Projects',
        projects: await getProjects()
    });
};

const ProjectController = {
    async getByName(req, res, next) {
        try {
            // Check if query param and name is present
            if(req.query && req.query.name) {
                const project = await Project.findOne({name: req.query.name}).exec();
                return res.render('projects', {
                    title: 'Project Management System',
                    page_title: 'Project',
                    projects:[project]
                });
            }
            // Else list all projects
            next();
        } catch(err) {
            console.log(err);
            res.send("An error occured");
        }
    },
    async getAll(req, res) {
        try {
            return await renderAllProjects(res);
        } catch(err) {
            console.log(err);
            res.send("An error occured");
        }
    },
    async post(req, res) {
        try {
            if(req.body.name){
                const projectProp = {};
                projectProp.name = req.body.name;
                if(req.body.location) projectProp.location = req.body.location;

                const project = new Project(projectProp);
                await project.save();
                return await renderAllProjects(res);
            }
            res.send("Name not defined");
        } catch(err) {
            console.log(err);
            res.send("An error occured");
        }
    },
    async put(req, res) {
        try{
            if(req.body.name){
                const projectFilter = {name: req.body.name};
                const projectProp = {};
                if(req.body.location) projectProp.location = req.body.location;

                await Project.findOneAndUpdate(projectFilter, projectProp).exec();
                return await renderAllProjects(res);
            }
            res.send("Name not defined");
        } catch(err) {
            console.log(err);
            res.send("An error occured");
        }
    },
    async delete(req, res) {
        try {
            if(req.body.name){
                await Project.deleteOne({name: req.body.name}).exec();
                return await renderAllProjects(res);
            }
            res.send("Name not defined");
        } catch(err) {
            console.log(err);
            res.send("An error occured");
        }
    },
    async getSearchForm(req, res) {
        res.render('project-form', {
            title: 'Project Management System',
            page_title: 'Search Project',
            url: '/projects',
            method: 1,
            labels: [{
                    tag: "name",
                    name: "Project Name"
                }]
            }
        );
    },
    async getPostForm(req, res) {
        res.render('project-form', {
            title: 'Project Management System',
            page_title: 'Add Project',
            url: '/projects',
            method: 2,
            labels: [{
                    tag: "name",
                    name: "Project Name"
                }, {
                    tag: "location",
                    name: "Project Location"
                }]
            }
        );
    },
    async getPutForm(req, res) {
        res.render('project-form', {
            title: 'Project Management System',
            page_title: 'Modify Project',
            url: '/projects',
            method: 3,
            labels: [{
                    tag: "name",
                    name: "Project Name"
                }, {
                    tag: "location",
                    name: "Project Location"
                }]
            }
        );
    },
    async getDeleteForm(req, res) {
        res.render('project-form', {
            title: 'Project Management System',
            page_title: 'Delete Project',
            url: '/projects',
            method: 4,
            labels: [{
                    tag: "name",
                    name: "Project Name"
                }]
            }
        );
    }
}

module.exports = ProjectController;