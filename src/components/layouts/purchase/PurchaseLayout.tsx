import PurchaseHeader from '@/components/purchaseinfo/Header'
import PurchaseUnder from '@/components/purchaseinfo/HeaderUnder'
import PurchaseTable from '@/components/purchaseinfo/PurchaseTable'



const PurchaseLayoutProps = () => {
    return (
        <>
            <PurchaseHeader />
            <PurchaseUnder />
            <PurchaseTable />
        </>
    );
};

export default PurchaseLayoutProps;
