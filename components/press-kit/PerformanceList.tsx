import { Badge } from "@/components/ui/badge";
import { Performance, VenuesByCity } from "@/types/press-kit";

type PerformanceListProps = {
  upcomingGigs: Performance[];
  pastGigs: Performance[];
  contactEmail: string;
};

export function PerformanceList({
  upcomingGigs,
  pastGigs,
  contactEmail,
}: PerformanceListProps) {
  return (
    <>
      {/* Upcoming section with prominent styling */}
      <div className="mb-12">
        <h3 className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium text-white/90 mb-6">
          Upcoming Shows
        </h3>
        {upcomingGigs.length > 0 ? (
          <div className="space-y-3">
            {upcomingGigs.map((gig, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 bg-white/[0.02] hover:bg-white/[0.05] p-4 rounded-xl transition-colors border border-white/5"
              >
                <time className="flex flex-col items-center justify-center min-w-[80px] bg-white/5 rounded-lg p-2">
                  <span className="text-[#ff5500] text-xl font-semibold">
                    {new Date(gig.date).toLocaleDateString("de-DE", {
                      day: "2-digit",
                    })}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {new Date(gig.date).toLocaleDateString("de-DE", {
                      month: "2-digit",
                    })}
                  </span>
                </time>
                <div className="flex-1">
                  <h4 className="font-medium text-white group-hover:text-[#ff5500] transition-colors">
                    {gig.venue}
                  </h4>
                  <p className="text-sm text-gray-400">{gig.location}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/[0.02] p-6 rounded-xl border border-white/5 text-center">
            <p className="text-gray-400">
              New dates coming soon
              <span className="block text-sm mt-2">
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-[#ff5500] hover:text-white transition-colors hover:underline"
                >
                  Contact for bookings
                </a>
              </span>
            </p>
          </div>
        )}
      </div>

      {/* Past section with alphabetical organization */}
      <div>
        <h3 className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium text-white/90 mb-6">
          Past Shows
        </h3>
        {pastGigs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(
              pastGigs.reduce((acc: VenuesByCity, gig: Performance) => {
                const city = gig.location || "Other";
                if (!acc[city]) {
                  acc[city] = [];
                }
                if (!acc[city].includes(gig.venue)) {
                  acc[city].push(gig.venue);
                }
                return acc;
              }, {} as VenuesByCity)
            )
              .sort(([cityA], [cityB]) => cityA.localeCompare(cityB))
              .map(([city, venues]) => (
                <div
                  key={city}
                  className="bg-white/[0.02] rounded-lg p-3 hover:bg-white/[0.04] transition-colors"
                >
                  <h5 className="text-sm font-medium text-white/70 mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]/40"></span>
                    {city}
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {venues
                      .sort((a, b) => a.localeCompare(b))
                      .map((venue, index) => (
                        <Badge
                          key={`${city}-${venue}-${index}`}
                          variant="secondary"
                          className="px-2 py-0.5 text-xs bg-white/[0.03] hover:bg-white/[0.08] text-gray-300 border-0 transition-colors"
                        >
                          {venue}
                        </Badge>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <p className="text-white/60">No past performances to display</p>
        )}
      </div>
    </>
  );
}
