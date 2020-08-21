
exports.up = async function(knex) {
    await knex.schema.createTable("fruits", (table) => {
        table.integer("id").notNull().unique().primary()
        //table.increments(id) shortcut for above
        table.text("name").notNull().unique()
        table.float("avgWeightOz").notNull()
        table.boolean("delicious").defaultTo(true)
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("fruits")
};
