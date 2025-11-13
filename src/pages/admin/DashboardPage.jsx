import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import ContentAdminLayout from "../../layouts/dashboard/ContentAdminLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <ContentAdminLayout />
    </DashboardLayout>
  );
}
