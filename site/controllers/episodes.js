const { Actor,Serie,Season,Episode,ActorEpisode } = require ("../database/models");


module.exports = {
    index: async(req, res) => {
        const episodes = await Episode.findAll({
            include: ["actors"]
        })
        res.render("episodes/index", { episodes });
    },
    detail: async(req, res) => {
        const id = req.params.id;
        const episodes = await Epsoded.findByPk(id, {
            include: ["actors"],
        });
        res.render("episodes/detail", { episodes});
    },
    showEdit: async (req, res) => {
        res.render("episodes/create-edit", {
            title: "Edit Episodes"
        });
},
    update: async (req, res) => {
        const id = req.params.id;
        const episode = await Episode.findByPk(id);
        await episode.update({
            ...req.body,
        });
        res.redirect("back");
    },
    showCreate: async (req, res) => {
        res.render("episodes/create-edit",{title: "Create Episodes"});
    },
    create: async (req, res) => {
        const episode = await Episode.create({
            ...req.body,
        });
        res.redirect(`/episodes/${episode.id}`);
    },

    addActor: async (req, res) => {
        const episode = await Episode.findByPk(req.params.id);
        const actor = await Actor.findByPk(req.body.actorId);
        await episode.addActor(actor, {
            through: {
                screentime: req.body.screentime,
            },
        });
        res.redirect("back");
    },

    updateActor: async (req, res) => {
        const episode = await Episode.findByPk(req.params.id);
        const actor = await Actor.findByPk(req.params.actorId);
        await episode.addActor(actor, {
            through: {
                screentime: req.body.screentime,
            },
        });
        res.redirect("back");
    },

    removeActor: async (req, res) => {
        const episode = await Episode.findByPk(req.params.id);
        const actor = await Actor.findByPk(req.params.actorId);
        episode.removeActor(actor);
        res.redirect("back");
    },

}