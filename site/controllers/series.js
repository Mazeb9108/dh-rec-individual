const { Actor,Serie,Season,Episode,ActorEpisode } = require("../database/models");

module.exports = {
    index: async (req, res) => {
        const series = await Serie.findAll({
            include: ["movies"],
        });

        res.render("series/index", { series });
    },
    detail: async (req, res) => {
        const serie = await Serie.findByPk(req.params.id, {
            include: ["seasons"],
        });

        res.render("series/detail", { serie });
    },
    showEdit: async (req, res) => {
        const serie = await Serie.findByPk(req.params.id, {
            include: ["seasons"],
        });
        res.render("series/create-edit", { serie, title: "Edit Serie" });
    },
    update: async (req, res) => {
        const serie = await Serie.findByPk(req.params.id, {
            include: ["seasons"],
        });
        await serie.update({
            ...req.body,
        });
        res.redirect("back");
    },
    showCreate: async (req, res) => {
        res.render("series/create-edit", { title: "Create Serie" });
    },
    create: async (req, res) => {
        const serie = await Serie.create({
            ...req.body,
        });
        res.redirect(`/series/${serie.id}`);
    },
};

