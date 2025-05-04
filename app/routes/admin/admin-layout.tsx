import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { MobileSidebar, NavItems } from "components";
import { Outlet, redirect } from "react-router";
import { getExistingUser, storeUserData } from "~/appwrite/auth";
import { account } from "~/appwrite/client";

export async function clientLoader() {
	try {
		const user = await account.get();

		if (!user.$id) return redirect("/sign-in");

		const existingUser = await getExistingUser(user.$id);

		// if the status is "user", redirect to user page
		// if the status is "admin", continue to the pages under of AdminLayout
		if (existingUser?.status === "user") {
			return redirect("/");
		}

		return existingUser?.$id ? existingUser : await storeUserData();
	} catch (error) {
		console.log("Error in clientLoader", error);
		return redirect("/sign-in");
	}
}

export default function AdminLayout() {
	return (
		<div className="admin-layout">
			<MobileSidebar />

			<aside className="w-full max-w-[270px] hidden lg:block">
				<SidebarComponent width={270} enableGestures={false}>
					<NavItems />
				</SidebarComponent>
			</aside>

			<aside className="children">
				<Outlet />
			</aside>
		</div>
	);
}
