<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website presentation
- Keep the gym page as a single-page experience with section anchors and use the shared Button for all action controls; this preserves navigation and contact flows across redesigns.
- Define visual roles in src/styles.css and load display fonts through the root head; this keeps presentation themeable and compatible with Tailwind v4.
