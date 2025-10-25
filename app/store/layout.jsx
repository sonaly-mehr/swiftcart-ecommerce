import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "SwiftCart. - Store Dashboard",
    description: "SwiftCart. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
