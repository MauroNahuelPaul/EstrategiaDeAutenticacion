export const renderProductsController = async (req, res) => {
    res.render('products', {
        id: req.user._id,
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        role: req.user.role
    });
}

export const realTimeProductsViewController = (req, res) => {

    res.render('realtimeproducts', {
        id: req.user._id,
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        role: req.user.role
    });
}


export const renderChatController = async (req, res) => {
    res.render('chat', {
        first_name: req.user.first_name,
        last_name: req.user.last_name,
    });
}

export const usersViewController = async (req, res) => {
    res.render('users', {
        id: req.user._id,
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        role: req.user.role
    })
}

export const renderCartController = async (req, res) => {

    res.render('cart', {
        id: req.user._id,
        first_name: req.user.first_name,
        last_name: req.user.last_name,
    });
}

export const renderPurchaseController = async (req, res) => {

    res.render('purchase', {
        idPurchase: req.params.tid,
        role: req.user.role,
        first_name: req.user.first_name,
        last_name: req.user.last_name,
    });
}
export const renderPurchaseListController = async (req, res) => {

    res.render('purchaseList', {
    
        role: req.user.role,
        first_name: req.user.first_name,
        last_name: req.user.last_name,
    });
}

export const renderLoginController = (req, res) => {
    res.render('login')
}

export const renderFailLoginController = (req, res) => {
    res.send({ error: 'Fail login' })
}

export const renderRegisterController = (req, res) => {
    res.render('register')
}

export const renderFailRegisterController = (req, res) => {
    res.send({ error: 'Fail register' })
}