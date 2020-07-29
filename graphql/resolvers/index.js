const Ivdrip = require("../../models/ivdripModel");
const Therapie = require("../../models/therapieModel");
const Service = require("../../models/serviceModel");
const Team = require("../../models/teamModel");
const Email = require("../../models/emailModel");
const factoryResolver = require("./factoryResolver");
const { mailer } = require("../../utils/mailer");

const getIvdrips = factoryResolver.getAll(Ivdrip);
const getTherapies = factoryResolver.getAll(Therapie);
const getServices = factoryResolver.getAll(Service);
const getTeams = factoryResolver.getAll(Team);

const sendEmail = async({ email }) => {
    try {
        const data = await Email.create({ email });
        await mailer([data.email]);
        return data.email;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getIvdrips,
    getTherapies,
    getServices,
    getTeams,
    sendEmail,
};