import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/libs/prismadb";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
    if (!req || !res) {
        throw new Error("Request or response object is missing");
    }

    const session = await getServerSession(req, res, authOptions);  // Ensure both `req` and `res` are passed

    if (!session?.user?.email) {
        throw new Error("Not signed in");
    }

    const currentUser = await prisma.user.findUnique({
        where: { email: session.user.email }
    });

    if (!currentUser) {
        throw new Error("Not signed in");
    }

    return { currentUser };
};

export default serverAuth;
