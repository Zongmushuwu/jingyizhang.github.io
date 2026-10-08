export interface Submission {
    slug: string;
    title: string;
    venue: string;
    authors: string[];
    abstract: string;
}

export const submissions: Submission[] = [
    {
        slug: "chi2027",
        title: "Should an AI Assistant Change Its Appearance? Exploring Representation Strategies Across Everyday Contexts",
        venue: "CHI Conference on Human Factors in Computing Systems (CHI 2027)",
        authors: ["Jingyi Zhang", "Anthony Steed"],
        abstract: "Artificial intelligence (AI) assistants support an expanding range of activities. Research shows that preferences for AI assistant representations vary across tasks and that appearance could shape interaction experiences. As AI and augmented reality (AR) glasses enable assistants to accompany users across spaces and activities, should their representations change across contexts or remain consistent? We conducted focus groups, which revealed varied preferences across contexts shaped by privacy, attention, social cues, task suitability, and personal taste, and benefits of both changing and keeping appearance consistent across contexts. We then used virtual reality in an exploratory user study to simulate future everyday AR interactions. Participants experienced two strategies: selecting one representation for all scenarios, and selecting representations separately for each scenario. Those favouring consistency valued familiarity and reduced adjustment, whereas those favouring context-specific representations prioritised situational suitability. Participants favouring consistency tended to express a stronger preference than those favouring context-specific representations.",
    },
    {
        slug: "vr2027",
        title: "Perceived Agency During Agent–Avatar Control Transitions in Virtual Reality",
        venue: "2027 IEEE Conference Virtual Reality and 3D User Interfaces (VR 2027)",
        authors: ["Jingyi Zhang", "Ruijun Sun", "Klara Brandstätter", "Nels Numan", "Anthony Steed"],
        abstract: "Prior beliefs about whether a virtual human (VH) is controlled by a human or a computer can shape how users interpret and respond to its behaviour. As emerging hybrid VH systems allow control to transfer between human operators and computer programs during an ongoing interaction, it remains unclear whether perceived agency updates with the actual controller or continues to reflect users’ prior beliefs and first impressions. We investigated this question in a within-subject VR study with 24 participants across four conditions: always computer-controlled, computer-to-human, human-to-computer, and always human-controlled. We designed an interaction task in which participants acted as interviewers, asking the VHs a fixed set of questions. Before each interaction, participants were informed whether the VH was human- or computer-controlled, matching the actual controller at the beginning, but were unaware of possible control transitions. We found that perceived agency was strongly influenced by the controller presented at the beginning of the interaction, with no evidence of updating following the control transitions. Social evaluations including likeability and co-presence were generally higher in conditions where human control occurred later and covered a greater proportion of the interaction. The results suggest that prior beliefs and first impressions continued to shape perceived agency, whereas social evaluations were more sensitive to the VH’s actual behaviour over the interaction.",
    },
];
