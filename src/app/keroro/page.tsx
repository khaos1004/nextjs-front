import Layout from '@/components/layouts/root/Layout'
import Purchase from '@/components/purchaseinfo/Header'
import Purchaseunder from '@/components/purchaseinfo/HeaderUnder'
import Purchasstable from '@/components/purchaseinfo/PurchaseTable'

const PurchaseLayout = () => {

    return (
        <>
            <Purchase />
            <Purchaseunder />
            <Purchasstable />
        </>
    )
}

export default PurchaseLayout;