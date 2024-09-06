import NavigationNews from "@/components/widgets/NavigationNews";
import PageHeader from "@/components/widgets/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import SideBar from "@/components/widgets/SideBar";
import FilterSidebar from "@/components/widgets/FilterSidebar";
const navLinks = [
  { href: "/", label: "All" },
  { href: "/policy", label: "Policy" },
  { href: "/healty", label: "Healty" },
  { href: "/tech", label: "Tech" },
  { href: "/it", label: "IT" },
];
export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <PageHeader />
      <div className="flex flex-1">
        <div className="container">
          <div className="flex flex-col ">
            <NavigationNews navLinks={navLinks} />
            <div className="grid gap-3 mt-[16px] grid-cols-1  sm:grid-cols-[250px_1fr]">
              <FilterSidebar />
              <div className="grid  h-news overflow-y-auto sm:grid-cols-2  grid-cols-1 justify-items-center items-start gap-5">
                <Card className="w-full max-w-md rounded-lg  shadow-lg transition-all hover:shadow-xl">
                  <Link href="#" className="block" prefetch={false}>
                    <img
                      src="https://random.imagecdn.app/500/150"
                      alt="News Thumbnail"
                      width={600}
                      className="w-full  aspect-[2/1] object-cover"
                    />
                    <CardContent className="p-6 space-y-3">
                      <CardTitle className="text-lg font-semibold transition-colors group-hover:text-primary">
                        Breaking News: Tech Giant Announces Major Acquisition
                      </CardTitle>
                      <CardDescription className="text-muted-foreground line-clamp-2">
                        In a surprise move, the leading tech company has
                        acquired a smaller startup, shaking up the industry. The
                        details of the deal are still emerging, but experts
                        predict it will have significant implications for the
                        market.
                      </CardDescription>
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <Link
                          href="#"
                          className="hover:underline"
                          prefetch={false}
                        >
                          Read More
                        </Link>
                        <Separator
                          orientation="vertical"
                          className="h-4 !w-[2px] bg-black dark:bg-accent dark:opacity-100 opacity-10 "
                        />
                        <span>2 hours ago</span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
                <Card className="w-ful  max-w-md rounded-lg  shadow-lg transition-all hover:shadow-xl">
                  <Link href="#" className="block" prefetch={false}>
                    <img
                      src="https://random.imagecdn.app/500/150"
                      alt="News Thumbnail"
                      width={600}
                      className="w-full  aspect-[2/1] object-cover"
                    />
                    <CardContent className="p-6 space-y-3">
                      <CardTitle className="text-lg font-semibold transition-colors group-hover:text-primary">
                        Breaking News: Tech Giant Announces Major Acquisition
                      </CardTitle>
                      <CardDescription className="text-muted-foreground line-clamp-2">
                        In a surprise move, the leading tech company has
                        acquired a smaller startup, shaking up the industry. The
                        details of the deal are still emerging, but experts
                        predict it will have significant implications for the
                        market.
                      </CardDescription>
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <Link
                          href="#"
                          className="hover:underline"
                          prefetch={false}
                        >
                          Read More
                        </Link>
                        <Separator
                          orientation="vertical"
                          className="h-4 !w-[2px] bg-black dark:bg-accent dark:opacity-100 opacity-10 "
                        />
                        <span>2 hours ago</span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
                <Card className="w-full  max-w-md rounded-lg shadow-lg transition-all hover:shadow-xl">
                  <Link href="#" className="block" prefetch={false}>
                    <img
                      src="https://random.imagecdn.app/500/150"
                      alt="News Thumbnail"
                      width={600}
                      className="w-full  aspect-[2/1] object-cover"
                    />
                    <CardContent className="p-6 space-y-3">
                      <CardTitle className="text-lg font-semibold transition-colors group-hover:text-primary">
                        Breaking News: Tech Giant Announces Major Acquisition
                      </CardTitle>
                      <CardDescription className="text-muted-foreground line-clamp-2">
                        In a surprise move, the leading tech company has
                        acquired a smaller startup, shaking up the industry. The
                        details of the deal are still emerging, but experts
                        predict it will have significant implications for the
                        market.
                      </CardDescription>
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <Link
                          href="#"
                          className="hover:underline"
                          prefetch={false}
                        >
                          Read More
                        </Link>
                        <Separator
                          orientation="vertical"
                          className="h-4 !w-[2px] bg-black dark:bg-accent dark:opacity-100 opacity-10 "
                        />
                        <span>2 hours ago</span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
