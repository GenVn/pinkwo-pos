"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { Bundle } from "@/types/type";
const formSchema = z.object({
  name_9514944232: z.string(),
  name_3769848389: z.string(),
  test: z.string().optional(),
});

interface CreateOrderFormProps {
  bundles: Bundle;
}

export default function CreateOrderForm({ bundles }: CreateOrderFormProps) {
  const foodItems = bundles.data;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10"
      >
        <FormField
          control={form.control}
          name="name_9514944232"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Khách hàng</FormLabel>
              <FormControl>
                <Input placeholder="Nhập tên khách hàng" type="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name_3769848389"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Món</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? foodItems.find((food) => food.name === field.value)
                            ?.name
                        : "Chọn món"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Chọn món" />
                    <CommandList>
                      <CommandEmpty>Không tìm thấy món.</CommandEmpty>
                      <CommandGroup>
                        {foodItems.map((food) => (
                          <CommandItem
                            value={food.name}
                            key={food.id}
                            onSelect={() => {
                              form.setValue("name_3769848389", food.name);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                food.name === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {food.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name_3769848389"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Bánh Mì</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? foodItems.find((food) => food.name === field.value)
                            ?.name
                        : "Chọn loại bánh mì"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Chọn món" />
                    <CommandList>
                      <CommandEmpty>Không tìm thấy món.</CommandEmpty>
                      <CommandGroup>
                        {foodItems.map((food) => (
                          <CommandItem
                            value={food.name}
                            key={food.id}
                            onSelect={() => {
                              form.setValue("name_3769848389", food.name);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                food.name === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {food.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name_3769848389"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Nhân</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? foodItems.find((food) => food.name === field.value)
                            ?.name
                        : "Chọn nhân"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Chọn món" />
                    <CommandList>
                      <CommandEmpty>Không tìm thấy món.</CommandEmpty>
                      <CommandGroup>
                        {foodItems.map((food) => (
                          <CommandItem
                            value={food.name}
                            key={food.id}
                            onSelect={() => {
                              form.setValue("name_3769848389", food.name);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                food.name === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {food.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name_3769848389"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Dùng kèm</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? foodItems.find((food) => food.name === field.value)
                            ?.name
                        : "Chọn loại dùng kèm"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Chọn món" />
                    <CommandList>
                      <CommandEmpty>Không tìm thấy món.</CommandEmpty>
                      <CommandGroup>
                        {foodItems.map((food) => (
                          <CommandItem
                            value={food.name}
                            key={food.id}
                            onSelect={() => {
                              form.setValue("name_3769848389", food.name);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                food.name === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {food.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name_3769848389"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Sốt</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? foodItems.find((food) => food.name === field.value)
                            ?.name
                        : "Chọn loại sốt"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Chọn món" />
                    <CommandList>
                      <CommandEmpty>Không tìm thấy món.</CommandEmpty>
                      <CommandGroup>
                        {foodItems.map((food) => (
                          <CommandItem
                            value={food.name}
                            key={food.id}
                            onSelect={() => {
                              form.setValue("name_3769848389", food.name);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                food.name === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {food.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name_3769848389"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Phụ kiện</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? foodItems.find((food) => food.name === field.value)
                            ?.name
                        : "Chọn phụ kiện đi kèm"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Chọn món" />
                    <CommandList>
                      <CommandEmpty>Không tìm thấy món.</CommandEmpty>
                      <CommandGroup>
                        {foodItems.map((food) => (
                          <CommandItem
                            value={food.name}
                            key={food.id}
                            onSelect={() => {
                              form.setValue("name_3769848389", food.name);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                food.name === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {food.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="test"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ghi chú</FormLabel>
              <FormControl>
                <Input placeholder="Nhập ghi chú" type="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Tạo đơn</Button>
      </form>
    </Form>
  );
}
