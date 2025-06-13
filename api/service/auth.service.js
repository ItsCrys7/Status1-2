import { Accounts, sequelize, } from "../db.js"

// Get all accounts with tasks
export const getKanbanAccount = async () => {
  const dbaccounts = await Accounts.findAll({
    attributes: ["id", "name"],
    include: [{ model: Accounts, attributes: ["id", "name",] }],
    order: [["id", "ASC"]]
  })

  return dbaccounts.map(account => ({
    id: account.id,
    name: account.name
  }))
}

// Add new acount
export const addNewAccount = async (columnName) => {
  await Accounts.create({ name: columnName});
}

// Delete Accounts
export const deleteProject = async (id) => {
  const t = await sequelize.transaction()
  try {
    await Accounts.destroy({ where: { id }, transaction: t })
    await t.commit()
  } catch (e) {
    await t.rollback()
    throw e
  }
}

// Edit account name
export const editAccount = async (id, name) => {
  await Accounts.update({ name:name }, { where: { id:id } })
}
