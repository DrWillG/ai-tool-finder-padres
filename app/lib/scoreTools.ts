import { TOOLS, Tool } from '@/app/data/tools';

export interface Answers {
  grade: string;
  subject: string;
  goal: string;
  concern: string;
  budget: string;
}

export function scoreTools(answers: Answers): Tool[] {
  const { grade, subject, goal, concern, budget } = answers;

  const budgetFilter = (tool: Tool): boolean => {
    if (budget === 'free') return tool.pt === 'free';
    return true;
  };

  const scored = Object.values(TOOLS)
    .filter((tool) => {
      const matchesGrade = tool.ag.includes(grade) || tool.ag.includes('all');
      const matchesSubject = tool.sj.includes(subject) || tool.sj.includes('all');
      const matchesGoal = tool.gl.includes(goal);
      const matchesBudget = budgetFilter(tool);
      return matchesGrade && matchesSubject && matchesBudget && matchesGoal;
    })
    .map((tool) => {
      let score = 10;
      if (tool.sj.includes(subject) && subject !== 'all') score += 3;
      if (tool.concern.includes(concern)) score += 5;
      if (concern === 'overreliance' && tool.safety.buildsSkills) score += 3;
      if ((grade === 'tk2' || grade === '35') && tool.safety.coppa) score += 2;
      if (budget === 'free' && tool.pt === 'free') score += 2;
      if (tool.safety.adFree) score += 1;
      return { tool, score };
    })
    .sort((a, b) => b.score - a.score);

  if (goal === 'safety' && scored.length < 4) {
    const safetyTools = Object.values(TOOLS).filter(
      (t) => t.gl.includes('safety') && !scored.find((s) => s.tool.id === t.id) && budgetFilter(t)
    );
    safetyTools.forEach((t) => scored.push({ tool: t, score: 8 }));
  }

  return scored.slice(0, 12).map((s) => s.tool);
}
