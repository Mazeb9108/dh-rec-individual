const {Movie, Genre, Actor, ActorMovie, Serie, Season, Episode, ActorEpisode} = require("../database/models");

module.exports = {
    index: async(req, res) => {
        const seasons = await Season.findAll({
            include:["episode"],
        });
        res.render("seasons/index", { seasons });
    },
    detail: async(req, res) => {
        const id = req.params.id;
        const season = await Season.findByPk(id ,{
            include: "episode",
        } );
        res.render("seasons/detail", {season});
    },
    showEdit: async (req, res) => {
        res.render("seasons/create-edit", {
            title: "Edit Season"
        });
    },
    update: async (req, res) => {
        const id = req.params.id;
        const season = await Season.findByPk(id);
        await serie.update({
            ...req.body,
        });
        res.redirect("back");
    },
    showCreate: async (req, res) => {
        res.render("seasons/create-edit",{title: "Create Season"});
    },
    create: function (req, res) {
        console.log(req.body);
        Season.create({
            title: req.body.title,
            tating: req.body.rating

        });
        res.redirect(`/seasons/${season.id}`);
    } 

}