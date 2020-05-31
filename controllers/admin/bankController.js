const Bank = require('../../models/Bank')
const fs = require('fs-extra')
const path = require('path')

module.exports = {
  index: async (req, res) => {
    let banks = await Bank.find()
    let alert = req.flash('alert')[0]

    res.render('admin/bank/index', { banks, alert })
  },

  store: async (req, res) => {
    try {
      const { name, accountName, accountNumber } = req.body
      await Bank.create({
        bank_name: name,
        account_name: accountName,
        account_number: accountNumber,
        image: `images/${req.file.filename}`
      })

      req.flash('alert', {
        status: 'success',
        message: 'Success add bank'
      })
    } catch (error) {
      req.flash('alert', {
        status: 'danger',
        message: 'Something Wrong'
      })
    }

    res.redirect('/admin/banks')
  },

  update: async (req, res) => {
    try {
      const { name, accountName, accountNumber } = req.body
      let bank = await Bank.findOne({ _id: req.params.id })
      if (!bank) {
        req.flash('alert', {
          status: 'danger',
          message: 'Bank not found'
        })

        res.redirect('/admin/banks')
      }

      bank.bank_name = name
      bank.account_name = accountName
      bank.account_number = accountNumber

      if (req.file !== undefined) {
        fs.unlink(path.join(`public/${bank.image}`))
        bank.image = `images/${req.file.filename}`
      }

      await bank.save()

      req.flash('alert', {
        status: 'success',
        message: 'Success update bank'
      })
    } catch (error) {
      console.log(error)
      req.flash('alert', {
        status: 'danger',
        message: 'Something Wrong'
      })
    }

    res.redirect('/admin/banks')
  },

  delete: async (req, res) => {
    let bank = await Bank.findOne({ _id: req.params.id })
    if (!bank) {
      req.flash('alert', {
        status: 'danger',
        message: 'Bank not found'
      })

      res.redirect('/admin/banks')
    }

    fs.unlink(path.join(`public/${bank.image}`))

    await bank.remove()
    req.flash('alert', {
      status: 'success',
      message: 'Success delete bank'
    })
    res.redirect('/admin/banks')
  }
}
