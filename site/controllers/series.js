const {Movie, Genre, Actor, ActorMovie, Serie, Season, Episode, ActorEpisode, Sequelize} = require ("../database/models")
const Op = Sequelize.Op;

module.exports = {
    index: async(req, res) => {
        const series = await Serie.findAll({
            include: ["season"],
        });
        res.render("series/index", {series});
    },
    detail: async(req, res) => {
        const id = req.params.id;
        const serie = await Serie.findByPk(id,{
            include: "season",
        });
        res.render("series/detail", {serie});
    },

    showEdit: async (req, res) => {
    res.render("series/create-edit", {
        title: "Edit Serie"
    });
    },

    update: async (req, res) => {
        const id = req.params.id;
        const serie = await Serie.findByPk(id);
        await serie.update({
            ...req.body,
        });
        res.redirect("back");
    },

    showCreate: async (req, res) => {
        res.render("series/create-edit",{title: "Create Serie"});
    },

    create: function (req, res) {
        console.log(req.body);
        Serie.create({
            title: req.body.title,
            cover_art: req.body.cover_art

        });
        res.redirect(`/series/${serie.id}`);
    }
} 