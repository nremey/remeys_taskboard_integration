# Publishing checklist for HACS

The repository files are prepared for publication as
`https://github.com/nremey/remeys_taskboard_integration`.

If that URL is different, update these three values in
`custom_components/remeys_taskboard/manifest.json` before the first push:

- `documentation`;
- `issue_tracker`;
- `codeowners`.

## Create the GitHub repository

1. Create a **public** repository named `remeys_taskboard_integration`.
2. Upload the contents of this directory directly to its default branch. Do not
   add another enclosing directory.
3. Enable GitHub Issues.
4. Add a short repository description, for example:
   `Native Home Assistant taskboard integration with calendar views and automations.`
5. Add the topics `home-assistant`, `hacs`, `hacs-integration`, `lovelace` and
   `taskboard`.
6. Confirm that the **HACS**, **Hassfest** and **Validate** workflows pass.

## Publish release 4.44.0

Only create the release after all workflows pass:

1. Create the tag `v4.44.0` from the default branch.
2. Create a GitHub release from that tag; a tag without a release is not enough.
3. Use `Remey's Taskboard 4.44.0` as its title.
4. Copy the `4.44.0` section from `RELEASE_NOTES.md` into the description.
5. Do not attach a ZIP manually; HACS can use GitHub's generated source archive.

## Test as a custom repository

In HACS, open the menu, choose **Custom repositories**, enter the GitHub URL,
select **Integration**, and install it. Restart Home Assistant and add Remey's
Taskboard from **Settings → Devices & services**.

## Submit to the searchable HACS catalog

1. Fork `https://github.com/hacs/default` with the same personal GitHub account
   that owns this integration repository.
2. Create a branch from `master` in that fork.
3. Add `nremey/remeys_taskboard_integration` to the case-sensitive,
   alphabetically sorted integration list used by `hacs/default`.
4. Open a pull request to `hacs/default:master`, allow maintainer edits, and wait
   for every check and the review to pass.

After the pull request is merged, the integration appears in HACS following the
next scheduled catalog scan.

## Brand assets

Home Assistant 2026.3 and newer load the files in
`custom_components/remeys_taskboard/brand` directly. The same `icon.png` and
`icon@2x.png` are also ready to be copied to
`custom_integrations/remeys_taskboard/` in a fork of
`https://github.com/home-assistant/brands` if the HACS catalog check still
requires a Brands repository entry.
