import prodModel from "../model/product.js";

export const prodDetailsController = async (req, res) => {
    try {
        const productId  = req.params.productId;
        console.log(productId)
        const product = await prodModel.findById(productId)
        if (!product) {
            return res.status(404).json({
                message: "failed to get the product details"
            })
        }

        res.status(200).json({
            message: "Product fetched succesfull",
            product
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error
        })
    }
}

export const allProdController = async (req, res) => {
    try {
        const pageNo = Number(req.params.pageNo);
        const compPerPage = 6;
        
        const totalProductsInDb = await prodModel.find()

        const allProducts = await prodModel
            .find()
            .skip((pageNo - 1) * compPerPage)
            .limit(compPerPage);

        const totalProducts = await prodModel.countDocuments();

        const totalPages = Math.ceil(
            totalProducts / compPerPage
        );

        const remPages = totalPages - pageNo;

        res.status(200).json({
            message: "all products fetched successfully",
            totalProducts,
            totalProductsInDb,
            totalPages,
            remPages,
            currentPage: pageNo,
            allProducts
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch products",
            error
        });
    }
};