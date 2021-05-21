const { Actor,Serie,Season,Episode,ActorEpisode } = require("../database/models");

module.exports = {
    index: async (req, res) => {
        const seasons = await Season.findAll({
            include: ["episodes"],
        });

        res.render("seasons/index", { seasons });
    },
    detail: async (req, res) => {
        const season = await Season.findByPk(req.params.id, {
            include: ["episodes"],
        });

        res.render("seasons/detail", { season });
    },
    showEdit: async (req, res) => {
        const season = await Season.findByPk(req.params.id, {
            include: ["episodes"],
        });
        res.render("seasons/create-edit", { season, title: "Edit Season" });
    },
    update: async (req, res) => {
        const season = await Season.findByPk(req.params.id, {
            include: ["episodes"],
        });
        await season.update({
            ...req.body,
        });
        res.redirect("back");
    },
    showCreate: async (req, res) => {
        res.render("genres/create-edit", { title: "Create Season" });
    },
    create: async (req, res) => {
        const genre = await Season.create({
            ...req.body,
        });
        res.redirect(`/seasons/${season.id}`);
    },
};