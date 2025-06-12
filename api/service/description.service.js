import { Description, sequelize, } from "../db.js"

// Get all description 
export const getKanbanDescription = async () => {
  const dbdescription = await Description.findAll({
    attributes: ["id", "name"],
    include: [{ model: Description, attributes: ["id", "name",] }],
    order: [["id", "ASC"]]
  })

  return dbdescription.map(description => ({
    id: description.id,
    name: description.name
  }))
}

// Add new acount
export const addNewDescription = async (columnName) => {
  await Description.create({ name: columnName});
}

// Delete Descriptions
export const deleteDescription = async (id) => {
  const t = await sequelize.transaction()
  try {
    await Description.destroy({ where: { id }, transaction: t })
    await t.commit()
  } catch (e) {
    await t.rollback()
    throw e
  }
}

// Edit Description name
export const editDescription = async (id, name) => {
  await Description.update({ name:name }, { where: { id:id } })
}
