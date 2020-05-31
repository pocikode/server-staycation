const Bank = require('../../models/Bank')

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
        image: req.file.filename
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
  }
}
