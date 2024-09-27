"use server";

import prisma from "../../lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteUser(id: number | undefined){
    await prisma.aluno.delete({
        where: {id},
    });

    revalidatePath("/admin/manage/products")
}

export async function createUser(formData: FormData) {

    const nome = formData.get("nome") as string;
    const email = formData.get("email") as string;
    const cep = formData.get("cep") as string;
    const cidade = formData.get("cidade") as string;
    const estado = formData.get("estado") as string;
    
    await prisma.aluno.create({
        data: {
            nome,
            email,
            cep,
            cidade,
            estado
        }
    })

    redirect("/admin/manage/products")
}

export async function editUser(id: number , formData: FormData) {
    const nome = formData.get("nome") as string;
    const email = formData.get("email") as string;
    const cep = formData.get("cep") as string;
    const cidade = formData.get("cidade") as string;
    const estado = formData.get("estado") as string;
    
    await prisma.aluno.update({
        where: {id},
        data: {
            nome,
            email,
            cep,
            cidade,
            estado
        }
    })
}