"use client"

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string"

import Button from "@/components/ui/button";
import { cn } from "@/app/lib/utils";

interface FilterProps {
    data: any[];
    name: string;
    valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey)

    const onClick = (id: string) => {
        const current = qs.parse(searchParams.toString());

        const query = {
            ...current,
            [valueKey]: id
        }

        if (current[valueKey] === id) {
            query[valueKey] = null
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true })

        router.push(url)
    }

    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold">
                {name}
            </h3>
            <hr className="my-4" />
            <div className="flex flex-wrap gap-2">
                {
                    data.map((filter) => (
                        <div key={filter.id} className="flex items-center">
                            <Button className={cn(" text-sm text-gray-800 bg-white border border-gray-300",
                                selectedValue === filter.id && "bg-black text-white"
                            )}
                                onClick={() => onClick(filter.id)}
                            >
                                {filter.name}
                            </Button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Filter