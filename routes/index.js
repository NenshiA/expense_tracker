module.exports = (app) => {
    app.get("/", (req, res) => {
        res.status(200).send("Welcome.......");
    });

    // incomes route
    app.use("/incomes", require("./incomes"));

    //expenses route
    app.use("/expenses", require("./expense"));

}
