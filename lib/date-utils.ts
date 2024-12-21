import { Performance } from "@/types/press-kit";

export function formatDate(dateString: string) {
  const date = new Date(dateString + "T12:00:00");
  return date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
}

export function sortPerformances(performances: Performance[]) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const sortedPerformances = performances
    .map((gig) => ({
      ...gig,
      isPast: new Date(gig.date + "T12:00:00") < today,
    }))
    .sort((a, b) => {
      const dateA = new Date(a.date + "T12:00:00");
      const dateB = new Date(b.date + "T12:00:00");
      return a.isPast === b.isPast
        ? a.isPast
          ? dateB.getTime() - dateA.getTime()
          : dateA.getTime() - dateB.getTime()
        : a.isPast
          ? 1
          : -1;
    });

  const upcomingGigs = sortedPerformances.filter((gig) => !gig.isPast);
  const pastGigs = sortedPerformances.filter((gig) => gig.isPast);

  return { upcomingGigs, pastGigs };
}
