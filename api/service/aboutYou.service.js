import { AboutYou, sequelize, } from "../db.js"

// Get all AboutYou 
export const getAboutYou = async () => {
  const dbaboutYou = await AboutYou.findAll({
    attributes: ["id", "name"],
    include: [{ model: AboutYou, attributes: ["id", "name",] }],
    order: [["id", "ASC"]]
  })

  return dbaboutYou.map(AboutYou => ({
    id: AboutYou.id,
    name: AboutYou.name
  }))
}

// Add new About YOu description
export const addNewAboutYou = async (name, text) => {
  await AboutYou.create({ name, text });
}


// Delete AboutYous
export const deleteAboutYou = async (id) => {
  const t = await sequelize.transaction()
  try {
    await AboutYou.destroy({ where: { id }, transaction: t })
    await t.commit()
  } catch (e) {
    await t.rollback()
    throw e
  }
}

// Edit AboutYou name
export const editAboutYou = async (id, name) => {
  await AboutYou.update({ name:name }, { where: { id:id } })
}
