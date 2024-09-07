import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import React from "react";
import { brand } from "../../lib/constants";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { useStore } from "../../store/store";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "ECAT",
    href: "/tests/ecat",
    description:
      "The ECAT is a mandatory exam to attain admission to engineering universities across Pakistan.",
  },
  {
    title: "MDCAT",
    href: "/tests/mdcat",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "FMGAT",
    href: "/tests/fmgat",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "GAT",
    href: "/tests/gat",
    description: "Visually or semantically separates content.",
  },
  {
    title: "SAT",
    href: "/tests/sat",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
];

export function NavBar() {
  const signOut = useStore((state) => state.signOut);
  const role = useStore((state) => state.role);
  return (
    <div className="h-[80px] shadow w-full flex items-center justify-around px-3 py-2">
      <span>
        <Link
          to="/"
          className="text-2xl font-bold text-transparent bg-gradient-to-r from-slate-900 to-green-600 bg-clip-text"
        >
          {brand.name}
        </Link>
      </span>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex rounded-full ring-1 ring-green-400">
              User Profile
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                      href="/user-profile"
                    >
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <p className="text-sm font-normal">Username</p>
                      </div>
                      <p>Email@ewmail.com</p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/purchased-tests" title="Purchased Tests">
                  The Tests you've purchased.
                </ListItem>
                {role === "TEACHER" && (
                  <ListItem href="/created-tests" title="Created Tests">
                    The Tests you've created.
                  </ListItem>
                )}

                <ListItem
                  title="Log out"
                  className="hover:bg-rose-200"
                  onClick={() => signOut()}
                />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/docs">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavBar;
