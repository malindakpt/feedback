import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../interfaces/entities/user";
import { Collection } from "../enums/collections.enum";
import { readEntity } from "../services/crudService";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fakeBaseQuery(),
    tagTypes: [Collection.Users],
    endpoints: (build) => ({
        getUserById: build.query<User | null, string>({
            async queryFn(id: string) {
                try {
                    if (!id) {
                        return { data: null };
                    }
                    const user = await readEntity<User>(Collection.Users, id);
                    if (user) {
                        return { data: user };
                    } else {
                        return { error: { status: 404, message: "User not found" } };
                    }
                } catch (error) {
                    return { error: { status: 500, message: (error as Error).message } };
                }
            },
            providesTags: [Collection.Users],
        }),
    }),
});

export const { useGetUserByIdQuery } = userApi;
