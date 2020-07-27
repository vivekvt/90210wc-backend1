const Ivdrip = require("../../models/ivdripModel");
const Therapie = require("../../models/therapieModel");
const Service = require("../../models/serviceModel");
const Team = require("../../models/teamModel");
const factoryResolver = require("./factoryResolver");

const getIvdrips = factoryResolver.getAll(Ivdrip);
const getTherapies = factoryResolver.getAll(Therapie);
const getServices = factoryResolver.getAll(Service);
const getTeams = factoryResolver.getAll(Team);

module.exports = {
    getIvdrips,
    getTherapies,
    getServices,
    getTeams,
};